Feature: Login Scenarios

    @smoke
    Scenario: Login
        Given a user is on the login page of "<BASE_URL>"
        When a user enters username "<USERNAME>" in the username text box
        And a user enters password "<PASSWORD>" in the password text box
        And a user clicks on the Sign In button
        Then the user is redirected to the dashboard page
        # When the user enters a valid username in the username text box
        # And the user enters a valid password in the password text box
        # Then the user is redirected to the landing page


    # #@smoke
    # Scenario: Login2
    #     Given a user is on the login page


    # #@smoke
    # Scenario: Login3
    #     Given a user is on the login page
    
    # #@smoke
    # Scenario: Login4
    #     Given a user is on the login page        


    Examples:      
      | BASE_URL                                     |USERNAME              | PASSWORD  |
      | https://mexil.it/chroma/site/userlogin       |general@teacher.com   |123456     |
      