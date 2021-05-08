# Expense Tracker

## Summary
This is a simple web app that uses a MongoDB cloud database to track user-inputted expenses.

# Preview

### Add and delete your expenses and access them from any device using a cloud MongoDB!
!["Preview"](https://github.com/JoshuaRully/expense-tracker/blob/main/gifs/preview.gif?raw=true)

# Dependencies

## Back-End
- Express
- Mongoose

## Front-End
- React
- Axios

# Running the project

You will need to create a MongoDB cloud cluster and add the respective URI to the config.env file to run this project locally.

Fork this repository, then clone it to your local machine.

You need **TWO** terminal windows/tabs for this (or some other plan for running two Node processes).

In one terminal run
```bash
npm install
``` 
Then run 
```bash 
npm start 
```
to launch the server.

In the other terminal, `cd` into `client`. Run 
```bash
npm install
``` 
then 
```bash
npm start
```
and go to `localhost:3000` in your browser.