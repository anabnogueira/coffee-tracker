# lil program to parse stats collected
# for file structure, see src/coffee_tracker
import sys

def parse(filename):
	f = open(filename, 'r')
	start = "["
	end = "]"
	delim = ", "
	array = start
	i = 0

	for line in f:
		# no comment
		if (len(line) <= 7):
			el = start + "'" + line[:2] + "/" + line[2:4] + "'" + delim + line[5] + end
		# comment
		else:
			el = start + "'" + line[:2] + "/" + line[2:4] + "'" + delim + line[5] + delim + "'" + line[9:-1] + "'" + end
		array += el + delim
		i += 1

	# each element is: date coffee [comment]
	print(array[:-2] + end)

if __name__ == '__main__':
	if (len(sys.argv) == 2):
		parse(sys.argv[1])
	elif (len(sys.argv) < 2):
		print("ERROR: Missing file name", file=sys.stderr)
	else:
		print("ERROR: Invalid file name", file=sys.stderr)

