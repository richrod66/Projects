feature: Greeting
    Scenario: Say hello
        Given I have a user named "Alice"
        When the greeter says hello greet the user
        Then I should heard "hello"
        