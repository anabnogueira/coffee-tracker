import random

def parse():
	f = open('coffee_tracker', 'r')
	start = "["
	end = "]"
	delim = ", "
	array = start
	i = 0

	for line in f:
		# no comment
		if (len(line) <= 7):
			el = start + "\"" + line[:2] + "/" + line[2:4] + "\"" + delim + line[5] + end

		# comment
		else:
			el = start + "\"" + line[:2] + "/" + line[2:4] + "\"" + delim + line[5] + delim + "\"" + line[9:-1] + "\"" + end
		
		array += el + delim
		i += 1

	# each element is: date coffee [comment]
	array = array[:-2] + end
	print(array)

if __name__ == '__main__':
	parse()
