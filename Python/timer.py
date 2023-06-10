def main():
    print()
    timeMin = input("How many minutes would you like to set the timer for?")
    timeSec = input("How many seconds would you like to set the timer for?")
    timeLeftMin= int(timeMin)
    timeLeftSec= int(timeSec)
    while timeLeftSec > 0 and timeLeftMin > 0:
            print(timeLeftMin, ":", timeLeftSec)
            if timeLeftSec > 60:
                    timeLeftSec = int(60)
                    timeLeftSec = timeLeftSec - 1
            else:
                    timeLeftSec = timeLeftSec - 1
            if timeLeftMin > 0 and timeLeftSec == 0:
                    timeLeftMin = timeLeftMin - 1
                    timeLeftSec = int(60)
    if timeLeftMin ==0 and timeLeftSec == 0:
        print("Time is up!")
main()