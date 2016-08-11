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

# Fill in the form
# input: 
# field - id for the form field
# value - value for the form field
def fillField(field, value):
  formField = driver.find_element_by_id(field)
  formField.send_keys(value)

# Test the UI for a given user
# input: dictionary with the user data
def testUser(user):
  formFields = user.keys()
  checkRegButton = driver.find_element_by_name('checkregbutton')

  for formField, value in user.iteritems():
    fillField(formField, value)
  checkRegButton.click()
  
  # Submit form
  # assert something man

# Test the UI for a given state
def testState(state):
  stateSelect.select_by_value(state)

  # Wait for the API call to load the form
  WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, "checkregform"))
  )

  userData = data[state]
  for user in userData:
    testUser(user)

directory = os.getcwd()+"/app/tests/"

# Set up test data 
with open(directory+"users.json") as data_file:    
  data = json.load(data_file)

# Set up driver 
chromedriver = directory+"chromedriver"
os.environ["webdriver.chrome.driver"] = chromedriver
driver = webdriver.Chrome(chromedriver)
driver.get("localhost:3000")

# Wait for the API call to load the state select
WebDriverWait(driver, 10).until(
  EC.presence_of_element_located((By.CSS_SELECTOR, "#stateSelect > option[value='MA']"))
)
stateSelect = Select(driver.find_element_by_id('stateSelect'))

testState('AL')

'''
# Run tests for all of the states
allStates = data.keys()
for state in allStates:
  testState(state)
'''

#driver.close()
