import React, { useState } from 'react';
import { List, ListItem, ListItemText } from './Contact.styled';
import { Container } from 'components/common/containers.styled';
import { MaterialIcon } from 'components/common/icons.styled';
import { SectionHeader } from 'components/common/headers.styled';

import { ReactComponent as GithubIconSvg } from 'assets/github-icon.svg';
import { ReactComponent as LinkedinIconSvg } from 'assets/linkedin-icon.svg';


export default function Contact() {
  const [items] = useState([
    { icon: <MaterialIcon>mail</MaterialIcon>, text: 'kevin.dpdt@gmail.com' },
    { icon: <MaterialIcon>phone</MaterialIcon>, text: '0781581174' },
    { icon: <GithubIconSvg />, text: '/in/kevin-depuydt' },
    { icon: <LinkedinIconSvg />, text: '/KevinDepuydt' },
  ]);

  return (
    <Container>
      <SectionHeader>Contact</SectionHeader>
      <List>
        {items.map(({ icon, text }) => (
          <ListItem>
            {icon}
            <ListItemText>{text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
