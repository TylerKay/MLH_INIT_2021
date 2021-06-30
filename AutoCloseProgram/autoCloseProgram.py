import pyautogui
import time

print(pyautogui.size())


while True:
    time.sleep(5)
    pyautogui.moveTo(1885, 13)
    pyautogui.doubleClick()