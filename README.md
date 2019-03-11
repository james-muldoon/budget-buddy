# Budget Buddy 
Budget Buddy is a handy tool to help you take control of your spending. Built using React Native, this on-the-go expense tracker works on both Android and iOS!  


## Supports Zero-Sum Budgeting 
Budget Buddy makes creating and sticking to your budget easy. 
* Define your own spending categories, each with their own spending limits and time periods
* Log your expenses as they happen
* View your budgeted vs actual spending across different time periods, allowing you to easily see where your money is going 

### Why is this needed? 
Many expense trackers use set budget periods for logging and viewing your expenses. You might set yourself a spending limit of $250 per week, and every expense you log in that week will be compared against this number. This creates a problem when a rarer, big expense occurs. You might be consistently staying under your weekly target, but then the week you service your car you will be massively over budget. 

Budget Buddy's approach of assigning time periods to a category solves this issue in a simple way. In the example from before, your "Groceries" category would have a weekly spending target, and "Car Service" would have a yearly amount budgeted. When you look at your summary for the week, only the grocery bill is counted towards your total. You can then switch to your yearly summary, and both your grocery and car service costs are counted towards the total. This approach makes it much simpler to differentiate between expenses that occur more/less often than each other, and to know if you are sticking to your budget.

## Installation
### Prerequisites
* Node installed
* Node package manager installed
* Expo installed on mobile device 

### Steps
1. Clone this repository 
2. In the root directory of the project, run `npm install` 
3. Run `npm start`. A QR code will be generated in the terminal
4. (Android) Open the Expo app on your device and scan the QR code
(iOS) Open the camera app on your device and scan the QR code 

## How to contribute
If you find something wrong or have suggestions on how we could be doing things better, feel free to log an issue. Please make sure to include the relevant tag (new feature, enhancement etc.).   

## License
This project is licensed under GNU GPLv3. 
The terms of the license can be viewed [here](LICENSE). 
