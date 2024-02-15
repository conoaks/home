import time
from roku import Roku
roku = Roku('10.0.0.247')
roku.poweron()
time.sleep(2)
roku.input_hdmi3()