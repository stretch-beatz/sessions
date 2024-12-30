from skyfield.api import N, W, wgs84
from skyfield.api import load
from FoxDot import TimeVar

class ObservationVar(TimeVar):
    def __init__(self, target="sun", observation="dist", multiplier = 1, north=53.4040, west = -1.6830 ):
        TimeVar.__init__(self, None)
        self.__target = "sun"
        self.__observation = "dist"
        self.__multiplier = multiplier

        self.ts = load.timescale()
        self.planets = load('de421.bsp')
        self.north = north
        self.west = west    
        self.target = target
        self.observation = observation
        print(f"Starting ObservationVar using SkyField API to get the positions of the planets")
        self.now()
    
    
    @property
    def observation(self):
        return self.__observation
    
    @observation.setter
    def observation(self, observation):
        if observation in ["dist", "alt", "azi"]:
            self.__observation = observation
            self.debug = True
 
    @property
    def target(self):
        return self.__target
    
    @target.setter
    def target(self, target):
        try :
            self.planets.decode(target)
            self.__target = target
            self.debug = True
        except:
            pass            
 
    @property
    def multiplier(self):
        return self.__multiplier
    
    @multiplier.setter
    def multiplier(self, multiplier):
        self.__multiplier = multiplier
        self.debug = True
    
    def now(self, time=None):
        t = self.ts.now()
        earth, target = self.planets['earth'], self.planets[self.target]
        location = earth + wgs84.latlon(self.north * N, self.west-1.6830 * W)
        astrometric = location.at(t).observe(target)
        altO, azO, distanceO = astrometric.apparent().altaz()
        #print(altO, azO, distanceO)
        altaz = {
            "alt"  : altO.degrees,
            "azi"  : azO.degrees,
            "dist" : distanceO.km
        }

        value = int(self.multiplier * altaz[self.observation])

        if(self.debug):
            self.debug = False
            print(f"target={self.target}, observation = {self.observation}, value={value}, dist={altaz['dist']}, alt={altaz['alt']}, azi={altaz['azi']}")    
        self.current_value = self.calculate(value)
        return self.current_value
        

# Create a timescale and ask the current time.
# Load the JPL ephemeris DE421 (covers 1900-2050).

