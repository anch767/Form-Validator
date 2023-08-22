import pyautogui

sw, sh = pyautogui.size()
rw = 504
rh = 504
rl = sw - rw
rt = sh - rh
region = (rl, rt, rw, rh)

print(sw,sh)

print(rl)
print(rt)

print