# add users.json file to app/tests
# terminal - cd to Executive directory
# python app/tests/checkRegTests.py

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os
import json
import time
import argparse


class CheckRegTester:
  def __init__(self, driver):
    self.driver = driver

  # Fill in the form
  # input: 
  # field - id for the form field
  # value - value for the form field
  def fillField(self, field, value):
    formField = self.driver.find_element_by_id(field)
    if formField.get_attribute("type") == "text":
      formField.clear()
      formField.send_keys(value)
    else: # Handling select
      select = Select(formField)
      select.select_by_visible_text(value)

  # Test the UI for a given user
  # input: dictionary with the user data
  def testUser(self, user):
    formFields = user.keys()
    checkRegButton = self.driver.find_element_by_name("checkregbutton")

    # Fill in all of the form fields
    for formField, value in user.iteritems():
      self.fillField(formField, value)

    # Submit form
    checkRegButton.click()
    # wait for form results to load in the hidden formResults div
    formResults = self.driver.find_element_by_id("formResults")

    WebDriverWait(self.driver, 10).until(
      EC.presence_of_element_located(
        (By.XPATH, "//*[@id='formResults' and text() != '']")
      )
    )
    time.sleep(1)
    results = formResults.get_attribute('innerHTML')
    # print results
    assert "\"registered\": true" in results

  # Test the UI for a given state
  def testState(self, state, userData):
    print state
    stateSelect = Select(self.driver.find_element_by_id("stateSelect"))
    stateSelect.select_by_value(state)

    # Wait for the API call to load the form
    WebDriverWait(self.driver, 10).until(
      EC.presence_of_element_located((By.ID, "checkregform"))
    )

    for user in userData:
      self.testUser(user)

  def test(self, data, target):
    self.driver.get(target)
    WebDriverWait(self.driver, 10).until(
      EC.presence_of_element_located(
        (By.CSS_SELECTOR, "#stateSelect > option[value='MA']"))
    )

    for state, userData in data.iteritems():
      self.testState(state, userData)

if __name__ == "__main__":
  TEST_DIR = os.path.dirname(os.path.abspath(__file__))
  CHROMEDRIVER = os.path.join(TEST_DIR, "chromedriver")
  SUPPORTED_JSON = os.path.join(TEST_DIR, "supported.json")
  ALL_JSON = os.path.join(TEST_DIR, "all.json")

  parser = argparse.ArgumentParser(description='Test executive')
  parser.add_argument("states", nargs="*")
  parser.add_argument("-t", "--target", default="localhost:3000")
  args = parser.parse_args()

  # Set up driver 
  os.environ["webdriver.chrome.driver"] = CHROMEDRIVER
  driver = webdriver.Chrome(CHROMEDRIVER)
  crt = CheckRegTester(driver)

  if not args.states:
    with open(SUPPORTED_JSON) as data_file:
      data = json.load(data_file)
  else:
    with open(ALL_JSON) as data_file:
       all_data = json.load(data_file)
       data = {k:v for k,v in all_data.iteritems() if k in set(args.states)}
  crt.test(data, args.target)
  driver.close()
