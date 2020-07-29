# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]
def final_array array 
   num_array = array.select do |value|
         value.kind_of? Integer
    end
   odd_array =  num_array.select do |value|
        value % 2 != 0
   end
   sorted_array = odd_array.sort
end
p final_array (fullArr1)
p final_array (fullArr2)



# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.
class Bike 
    def initialize (model, frame_size, bell = 'off', wheels = '2', speed = 0, brake = 0)
        @model = model
        @wheels = wheels
        @frame_size = frame_size
        @bell = bell
        @speed = speed
        @brake = brake
    end
    def get_info
        
         "My #{@model} bike has #{@wheels} wheels and a #{@frame_size} frame and its bell sounds like #{@bell} and it goes #{@brake} miles per hour."
    end
    def ring_bell
        @bell = 'AHHHH'
    end
    def speedometer
        @speed
    end
    def pedal_faster speed
        @speed = speed
    end
    def brake brake
        sum_math = @speed - @brake = brake
            if sum_math < 0
                0
            else 
               @brake = sum_math 
        end

    end
    

end
bike_result = Bike.new 'fox', 'large'

puts bike_result.ring_bell
puts bike_result.speedometer
puts bike_result.pedal_faster 12
puts bike_result.brake 10
puts bike_result.get_info




# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.






# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.





# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# class Pedal < Bike
#     def initialize speed
#         super (speed)
#     end
#     def pedal_faster
#         @speed 
#     end
# end
# my_pedal = Pedal.new 12


# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
