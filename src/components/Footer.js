import {Container} from "./styles/Container.styled";
import {Flex} from "./styles/Flex.styled";

const Footer = () => {
    return (
      <div>
        <Container>
          <img src="./images/logo_white.svg" alt="" />
          <Flex>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ipsum erat, tempus massa in, laoreet quam.
                Duis hendrerit congue sem, a commodo velit suscipit non.
              </li>
              <li>+44 123-456-7890</li>
              <li>example@huddle.com</li>
            </ul>
            <ul>
              <li>About Us</li>
              <li>What We Do</li>
              <li>FAQ</li>
            </ul>
            <ul>
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
            {/* social icons */}
          </Flex>
          <p>&copy; 2022 Huddle. All rights reserved</p>
        </Container>
      </div>
    );
}

export default Footer;
