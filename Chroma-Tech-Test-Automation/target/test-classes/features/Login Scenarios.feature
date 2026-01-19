Feature: Login Scenarios

    @smoke
    Scenario: Login
        Given a user is on the login page
        When the user enters a valid username in the username text box
        And the user enters a valid password in the password text box
        Then the user is redirected to the landing page