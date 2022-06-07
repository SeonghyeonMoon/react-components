import { MouseEvent, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  listItems: {
    label: string;
    callback: () => void;
  }[];
}

function Dropdown({ listItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    function checkClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target)) close();
    }
    document.addEventListener('mousedown', (e: any) => checkClickOutside(e));
    return () => {
      document.removeEventListener('mousedown', (e: any) => checkClickOutside(e));
    };
  }, [ref]);

  return (
    <Container ref={ref}>
      {isOpen ? (
        <>
          <Button onClick={close}>Close</Button>
          <ListItems>
            {listItems.map(({ label, callback }, index) => (
              <ListItem key={index} onMouseDown={callback}>
                {label}
              </ListItem>
            ))}
          </ListItems>
        </>
      ) : (
        <Button onClick={open}>Open</Button>
      )}
    </Container>
  );

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
}

export default Dropdown;

const Container = styled.div`
  position: relative;
  width: fit-content;
  /* 임시 스타일 코드 */
  margin: 100px auto;
`;

const Button = styled.button`
  /* 임시 스타일 코드 */
  border: none;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  background-color: coral;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    filter: brightness(115%);
  }
  &:active {
    filter: brightness(85%);
  }
  z-index: 2;
`;

const appear = keyframes`
  from {
    transform: translate(-50%, 10%);
    opacity: 0;
  }
`;

const ListItems = styled.ul`
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, 0);
  list-style: none;
  /* 임시 스타일 코드 */
  width: 100px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  animation: ${appear} .3s 0s;
`;

const ListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #f5f5f5;
  }
  &:active {
    background-color: #e5e5e5;
  }
  & + & {
    border-top: 1px solid #d2d2d2;
  }
`;
