import com.chromatech.utils.WebDriverUtils;

public class Test {
    public static void main(String[] args) throws InterruptedException {
        
        WebDriverUtils.initBrowser();
        WebDriverUtils.tearDown();
    }
}
