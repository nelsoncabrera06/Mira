import matplotlib.pyplot as plt
import matplotlib.image as mpimg
forest = mpimg.imread('forest.jpeg')
mountain = mpimg.imread('mountain.jpeg')

# imgplot = plt.imshow(img)
# here i'm showing you how to see an image


a = 20
b = 55
if b > a:
  print("b is greater than a")
  imgplot = plt.imshow(forest)
else:
  print("hello pretty")
  imgplot = plt.imshow(mountain)

plt.show()

#print("Hello world")
