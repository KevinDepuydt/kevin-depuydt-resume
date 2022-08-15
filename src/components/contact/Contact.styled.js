import styled from 'styled-components';
import { List, ListItem } from 'components/common/lists.styled';

export const ContactList = styled(List)`
  list-style: none;
  padding-inline-start: 0;
`;

export const ContactListItem = styled(ListItem)`
  display: flex;
  flex-direction: row;
  align-items: center;

  span.material-icons, svg {
    margin-right: 0.5rem;
  }
  
  span.material-icons {
    font-size: 1rem;
  }
  
  svg {}
`;
