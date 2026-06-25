import time
import keyboard

while not keyboard.is_pressed("esc"):
    if keyboard.is_pressed("W"):
        while not keyboard.is_pressed("esc"):
            keyboard.press_and_release('A')
            time.sleep(5)

