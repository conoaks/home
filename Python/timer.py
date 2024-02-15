import time
import os
def clear_screen():
    # Clear the screen based on the OS
    os.system('cls' if os.name == 'nt' else 'clear')
def main():
    print()
    timeHour = input("How many hours would you like to set the timer for?")
    timeMin = input("How many minutes would you like to set the timer for?")
    timeSec = input("How many seconds would you like to set the timer for?")
    timeLeftHours= int(timeHour)
    timeLeftMin= int(timeMin)
    timeLeftSec= int(timeSec)
    while timeLeftSec >=0:
        clear_screen()
        print(timeLeftHours, "hours", timeLeftMin, "minutes", timeLeftSec, "seconds")
        time.sleep(1)
        if timeLeftMin >0 and timeLeftSec==0:
            timeLeftMin = timeLeftMin - 1
            timeLeftSec = 59
        if timeLeftSec >0:
            timeLeftSec = timeLeftSec - 1
        if timeLeftHours>0 and timeLeftMin==0 and timeLeftSec==0:
            timeLeftHours = timeLeftHours - 1
            timeLeftMin = 59
            timeLeftSec = 59
        if timeLeftHours ==0 and timeLeftMin ==0 and timeLeftSec == 0:
            print("Time is up!")
            break
        if timeLeftHours >24 or timeLeftMin >60 or timeLeftSec >60:
            print("Invalid time")
            break
main()