
import pyautogui, time

time.sleep(2)

def game1(x, y, t, repeat):
    for i in range(repeat):
        pyautogui.moveTo(x, y, .5)
        pyautogui.click()
        
        time.sleep(t)


# game1(1782, 232, 40, 5)  # dungeons
game1(1378, 959, 50, 5)