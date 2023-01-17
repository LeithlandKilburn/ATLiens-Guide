# ATLiens

## User Story

- As a registered User who is not presently logged in...

  - When I got to the home page...
    - I see the Home view, and a Navigation bar at the side of the page

- As a unregistered User who is not presently logged in...

  - When I got to the home page...
    - I see the Home view, and a Navigation bar at the side of the page
    - I click on the "Sign Up" tab on the Nav bar to create an account
  - When I go to the Sign Up page...
    - I see a sign up form with username & password fields & sign up button
    - After clicking sign up button, I am navigated back to home page

- As a unregistered User and/or registered User...

  - When I got to the home page...
    - I see the Home view, and a Navigation bar at the side of the page
    - I click on the popular filter to see the most common slang words being used
    - I am redirected to the search page where there's a list of most common words
    - I click on a word, and I am taken to that word's page where I see the word's definition, usage, and video

- As a logged in Admin...

  - When I got to the home page...

    - I see the Home view, and a Navigation bar at the side of the page
    - On the nav bar, I click on the "View All Words" tab
    - I am redirected to a results page that has all the words in our db
    - There, I can delete / edit words
      - When I click on edit, I am redirected to a form to edit word details
        - When I click submit button, I am redirected to that results page
      - When I check delete, I am redirected to a delete confirmation page - When I click submit button, I am redirected to that results page
    - On the nav bar, I click on the "Add Word" tab
    - I am redirected to a add form for a new word
    - When I click submit, I am redirected to "View All Words" page.

    - I click on the popular filter to see the most common slang words being used
    - I am redirected to the search page where there's a list of most common words
    - I click on a word, and I am taken to that word's page where I see the word's definition, usage, and video

## Learning Goals

- AWS - DynamoDB - non-relational database - https://aws.amazon.com/dynamodb/?nc2=h_ql_prod_db_ddb
- AWS Deployment - final deployment
- CSS Grid

- Docker Deployment ?
- Vercel - for hosting final project - check if it's compatible with Java

## Database Set Up

- users

  - userId int primary key auto_increment,
  - username varchar(50) not null unique,
  - password_hash varchar(2048) not null,
  - role1_id int foreign key
  - role2_id int foreign key
  - role3_id int foreign key

- roles

  - roleId int primary key auto_increment,
  - `name` varchar(25) not null unique

- words

  - wordId int primary key auto_increment,
  - `name` varchar(1000) not null (doesn’t have to be unique)
  - definition varchar(2048) not null
  - example varchar (2048) not null
  - videoUrl varchar(2048) (optional)
  - useRating int(5) not null (limit number 1 to 5)
  - category1Id
  - category2Id
  - category3Id

- categories

  - categoryId int primary key auto_increment,
  - `name` varchar(50) not null unique
  - isExplicit boolean not null

- favoriteWords - User-Word (bridge table)

  - favoriteWordId
  - userId
  - wordId

## Notes

- Vertical Deployment
- fetch request on home component and pass as props

- Quick Search:

  - Categories (predefined): Greeting, Insults, Express Gratitude, Miscellaneous (catch all)
  - Popular
  - isExplicit

- Lina's DynamoDB Notes:

  - is DynamoDB Free?
  - NoSQL Database
  - ideal for applications with know access pattern
    - need to know how you want to access your data
  - access the db through the APIs or ORM (object relational mapper)
    - JAVA: ORM is dynamoDb Mapper
  - authorized through IAM (permissions system for AWS)
    - MySQL you pass around credentials
    - AWS is IAM (easier)
  - primary key: Partition key + sort key (you can't add a sort key later)
    - need to ask yourself if id will have duplicates
  - no varchar, it's more simple
  - global secondary index (GSI): you can query on any other column
  - Table is collection of items, each item has attributes

  - JWT Web Token
  - AWS Cognito: AWS Cognito can be used to authenticate users and issue JWT tokens. Once the user is authenticated, Cognito will return a JWT token to the client, this token contains the user's identity and can be used to authorize access to resources.
  - AWS SDK for Java to programmatically create IAM roles for users that sign up
    - AmazonIdentityManagement:
