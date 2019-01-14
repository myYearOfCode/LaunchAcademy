require 'pry' # import the pry library for debugging.

two = 1 + 1
four = two + 2
eight = four + 5
sixteen = eight + 8

# this line seems to set the breakpoint
binding.pry

puts sixteen
