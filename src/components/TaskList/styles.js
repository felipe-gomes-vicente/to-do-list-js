import styled from 'styled-components'

export const Section = styled.section`
  max-width: 28.5rem;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  margin-top: 10px;
  border-radius: 10px;
  padding: 40px 40px 0;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  height: 50px;
  width: 100%;
  border-radius: 8px;
  padding: 0 16px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.2rem;
  outline: none;
`;

export const Button = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 0;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  &:hover {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  }
`;

export const List = styled.ul`
  list-style-type: none;
  max-width: 23.5rem;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 0px 10px;
  height: 50px;
  white-space: nowrap;
  width: 23.5rem;
  
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 10px;
  }

  > div button {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    width: 40px;
    height: 30px;
  }
`;