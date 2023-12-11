const inquirer = require('inquirer');
const fs = require('fs');
const db = require('./config/connection');
const path = require('path');
const mysql = require('mysql2')

const { startPrompt } = require('./promptAnswers/promptFunctions');