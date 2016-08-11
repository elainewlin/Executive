from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import os

chromedriver = os.getcwd()+"/chromedriver"
os.environ["webdriver.chrome.driver"] = chromedriver
browser = webdriver.Chrome(chromedriver)
browser.get("http://www.python.org")
assert "Python" in browser.title
elem = browser.find_element_by_name("q")
elem.clear()
elem.send_keys("pycon")
elem.send_keys(Keys.RETURN)
assert "No results found." not in browser.page_source
browser.close()