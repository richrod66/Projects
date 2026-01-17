package com.chromatech;
import com.chromatech.utils.TestProperties;
import com.chromatech.utils.WebDriverUtils;

public class Test {
    public static void main(String[] args) throws InterruptedException {
        
        WebDriverUtils.initBrowser();
        WebDriverUtils.driver.get(TestProperties.BASE_URL);
        WebDriverUtils.tearDown();
    }
}
