# Carbon Credit Trading Platform
## Introduction
Climate change is one of the biggest challenges facing our planet today. One of the key strategies to combat climate change is reducing greenhouse gas emissions, particularly carbon dioxide (CO2). Carbon credits are a market-based solution to help businesses offset their carbon emissions by investing in projects that reduce or capture CO2, such as renewable energy or reforestation projects.
As the demand for carbon credits grows, it becomes essential to create an efficient, transparent, and user-friendly platform that enables businesses to trade carbon credits seamlessly. This platform should foster trust, ensure fair pricing, and help users track and manage their carbon offsets effectively.

## Challenge Statement
Your task is to design and develop a carbon credit trading platform that allows users, such as companies, to trade carbon credits. The application should offer essential features such as viewing their available carbon credits, purchasing additional carbon credits from other companies, and selling carbon credits to other companies. This must be a web application.

All the requirements included below are meant to be a guideline to guide your team on how to tackle this challenge statement. While going through the requirements think about the following guiding questions:
- What are the features to prioritise and implement?
- How will you implement them?
- What are your considerations?

## Module, Basic Requirements (Frontend), Basic Requirements (Backend)
### Login
- Users must be able to login
- Server must be able to authenticate a user’s identity using JSON Web Tokens for authentication

### Landing Page
- Display company’s outstanding balances for:
  - Carbon Credits
  - Cash Balances
- Return user’s balance details from companyAccountBalance and company table:
  - companyName, carbonBalance and cashBalance.

- Display all outstanding requests made by your company with the following details:
  - Request Date
  - Company Name
  - Carbon Price (SGD/Tonnes)
  - Carbon Quantity
  - Requesting Reason
  - Request Type (Buy/Sell)
- Return a list of outstanding requests from the outstandingRequest and company tables:
  - companyName, requestDate, carbonUnitPrice, carbonQuantity, requestReason and RequestType.

- Insert/Edit/Delete requests made to another company with the following details:
  - Request Date
  - Company Name
  - Carbon Price (SGD/Tonnes)
  - Carbon Quantity
  - Requesting Reason
  - Request Type (Buy/Sell)
- Able to create new requests, edit the request and delete the request from outstandingRequest table. Creating requests should also update the requestReceived table.

### Requests Received Page
- Display all outstanding requests made from other companies with the following details:
  - Request Date
  - Requestor Company Name
  - Carbon Price (SGD/Tonnes)
  - Carbon Quantity
  - Requesting Reason
  - Request Type (Buy/Sell)
- Return a list of outstanding requests from the outstandingRequest and company tables:
  - requestorCompanyName, requestDate, carbonUnitPrice, carbonQuantity, requestReason and RequestType.

- Create a button to Accept / Reject as well as checkbox to Bulk Accept / Reject requests made from other companies.
- Update the database for outstandingRequest table to indicate accept / reject status. Updates the corresponding account balances in companyAccountBalance table.

- Functionality upon entering the page to alert users via pop-up message for overdue requests (defined as 7 days after request date).
- Returns and updates alerts as well as its view status stored within the requestReceived

## Bonus Challenges
### Creating a Dashboard / Visualisation(s) to provide insights to companies:
- Display Data Visualisation tables or charts
- Come up with simple visualisations deemed appropriate. E.g. Time series of requests in a particular month, time series of settlement prices, charts of request approval rates.

- Display useful insights from data
- Provide insights from the data visualized and corresponding recommendations for the company. You may incorporate external datasets for real carbon transactions.

### Creating a Multi-Layer Approval Workflows for requests:
- Requires for multiple approvers to approve a single request before it can be processed.
- Modify the workflow and tables to require more than one approver before the request is set to

## Tech Stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: PostgreSQL
- ORM: Prisma
- Auth: JWT

## Features
- JWT Authentication
- Carbon Credit Buy/Sell Requests
- Request Approval Workflow
- Balance Management
- Overdue Request Alerts
