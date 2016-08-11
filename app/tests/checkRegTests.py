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

directory = os.getcwd()+"/app/tests/"
# set up test data 
with open(directory+"users.json") as data_file:    
  data = json.load(data_file)
allStates = data.keys()

'''
# set up driver 
chromedriver = directory+"chromedriver"
os.environ["webdriver.chrome.driver"] = chromedriver
driver = webdriver.Chrome(chromedriver)
driver.get("localhost:3000")

# wait for the API call to load the state select
WebDriverWait(driver, 10).until(
  EC.presence_of_element_located((By.CSS_SELECTOR, "#stateSelect > option[value='MA']"))
)
stateSelect = Select(driver.find_element_by_id('stateSelect'))
'''

print data["MA"]

def testState(state):
  stateSelect.select_by_value(state)
  print state

'''
driver.close()
'''