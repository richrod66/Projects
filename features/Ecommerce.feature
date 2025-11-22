Feature: Ecommerce validations
@Regression
  Scenario: Placing the Order
    Given a login to Ecommerce application with "rich944@gmail.com" and "Kronites2!"
    When Add "ZARA COAT 3" to Cart
    Then Verify "ZARA COAT 3" is added to Cart
    When Enter valid details and Place the Order
    Then Verify Order is present in the order history cart


@validations
  Scenario Outline: Checking eror message
    Given a login to Ecommerces2 application with "<username>" and "<passwor>!"
    Then Verify Error message is displayed


    Examples:
      | username           | password  |
      | rich944@gmail.com | Kronites2! |  
      | rrodriguez.prepaid@transactcampus.com | Kronites2! |