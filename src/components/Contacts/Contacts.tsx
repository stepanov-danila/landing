import Phone from "./Phone.styled";
import StyledContacts, { ContactsText } from "./Contacts.styled";

const Contacts = () => {
  return (
    <StyledContacts>
      <ContactsText>Мы отвечаем на них тут:</ContactsText>
      <Phone href="tel:+7 (495) 967-66-50">+7 (495) 967-66-50</Phone>
    </StyledContacts>
  );
};

export default Contacts;
