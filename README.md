# Coffee Tracker :coffee:

General activity tracker grid I made to monitor my caffeine consumption throughout 2019

````
coffee-tracker/
├── README.md
└── src
    ├── coffee.js
    ├── coffee_parsed
    ├── coffee_tracker
    ├── index.html
    ├── parse.py
    └── style.css
````

## Usage

### parse.py:

````
python parse.py filename > filename_parsed
````

`filename` should follow `coffee_tracker` structure.

Output will be saved to filename_parsed, just add it to the **stats** variable on `coffee.js`.

### coffee.js:

Weekday for the 1st of January must be specified by changing the **weekday** variable at the start of the file.

Color scheme can be changed in the **colourmap** array.

**stats** array should be set as the output of `parse.py`.