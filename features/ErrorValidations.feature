Feature: Ecommerce2 validations
  @validations
  Scenario Outline: Checking eror message
    Given a login to Ecommerces2 application with "<username>" and "<passwor>!"
    Then Verify Error message is displayed


    Examples:
      | username           | password  |
      | rich944@gmail.com | Kronites2! |  
      | rrodriguez.prepaid@transactcampus.com | Kronites2! |
