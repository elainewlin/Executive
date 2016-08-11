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
# Fill in the form
# input: 
# field - id for the form field
# value - value for the form field
def fillField(field, value):
  formField = driver.find_element_by_id(field)
  if formField.get_attribute("type") == "text":
    formField.clear()
    formField.send_keys(value)
  else: # Handling select
    select = Select(formField)
    select.select_by_visible_text(value)

# Test the UI for a given user
# input: dictionary with the user data
def testUser(user):
  formFields = user.keys()
  checkRegButton = driver.find_element_by_name("checkregbutton")

  # Fill in all of the form fields
  for formField, value in user.iteritems():
    fillField(formField, value)

  # Submit form
  checkRegButton.click()
  # wait for form results to load in the hidden formResults div
  formResults = driver.find_element_by_id("formResults")

  WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, "//*[@id='formResults' and text() != '']"))
  )
  time.sleep(1)
  print formResults.get_attribute('innerHTML')
  # assert something man?

# Test the UI for a given state
def testState(state):
  print state
  stateSelect.select_by_value(state)

  # Wait for the API call to load the form
  WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, "checkregform"))
  )

  userData = data[state]
  for user in userData:
    testUser(user)

directory = os.getcwd()+"/app/tests/"

# Set up driver 
chromedriver = directory+"chromedriver"
os.environ["webdriver.chrome.driver"] = chromedriver
driver = webdriver.Chrome(chromedriver)
driver.get("localhost:3000")

# Wait for the API call to load the state select
WebDriverWait(driver, 10).until(
  EC.presence_of_element_located((By.CSS_SELECTOR, "#stateSelect > option[value='MA']"))
)
stateSelect = Select(driver.find_element_by_id("stateSelect"))
'''

# Set up test data 
with open(directory+"all.json") as data_file:    
  data = json.load(data_file)
testState("MI")

'''
# Run tests for all supported states
with open(directory+"supported.json") as data_file:    
  data = json.load(data_file)
allStates = data.keys()
for state in allStates:
  testState(state)

#driver.close()
