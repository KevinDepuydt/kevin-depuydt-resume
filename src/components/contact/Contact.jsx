import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/common/containers.styled';
import { MaterialIcon } from 'components/common/icons.styled';
import { SectionHeader } from 'components/common/headers.styled';
import { ContactList, ContactListItem } from 'components/contact/Contact.styled';

import { ReactComponent as GithubIconSvg } from 'assets/github-icon.svg';
import { ReactComponent as LinkedinIconSvg } from 'assets/linkedin-icon.svg';


export default function Contact() {
  const { t } = useTranslation();
  const [items] = useState([
    { icon: <MaterialIcon>mail</MaterialIcon>, text: t('contact.email') },
    { icon: <MaterialIcon>phone</MaterialIcon>, text: t('contact.phone') },
    { icon: <GithubIconSvg />, text: t('contact.linkedin') },
    { icon: <LinkedinIconSvg />, text: t('contact.github') },
  ]);

  return (
    <Container>
      <SectionHeader primary>{t('contact.title')}</SectionHeader>
      <ContactList>
        {items.map(({ icon, text }, index) => (
          <ContactListItem key={`contact-item-${index}`}>
            {icon}
            <span>{text}</span>
          </ContactListItem>
        ))}
      </ContactList>
    </Container>
  );
}
