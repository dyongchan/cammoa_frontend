import styled from 'styled-components';
import { Container, Header } from '@components/shared/UIStyles';
import FoodIcon from '@assets/icons/category/food-icon.svg?react';
import DrinkIcon from '@assets/icons/category/drink-icon.svg?react';
import HouseholdIcon from '@assets/icons/category/household-icon.svg?react';
import StationeryIcon from '@assets/icons/category/stationery-icon.svg?react';
import CosmecticIcon from '@assets/icons/category/cosmectic-icon.svg?react';

const categories = [
  { icon: FoodIcon, label: '식품' },
  { icon: DrinkIcon, label: '생수 · 음료' },
  { icon: HouseholdIcon, label: '생활용품' },
  { icon: StationeryIcon, label: '문구류' },
  { icon: CosmecticIcon, label: '화장품' },
];

const UserMenuDropdown = () => {
  return (
    <CategoryModal>
      {categories.map((category, index) => {
        const Icon = category.icon;
        return (
          <CategoryItem key={index}>
            <Icon />
            <CategoryText>{category.label}</CategoryText>
          </CategoryItem>
        );
      })}
    </CategoryModal>
  );
};

export default UserMenuDropdown;

const CategoryModal = styled(Container)`
  position: absolute;
  top: 101%;
  left: -1%;
`;
const CategoryItem = styled(Header)`
  width: 140px;
  height: 45px;
  padding: 5px 10px;

  flex-direction: row;

  background-color: #fff;
  cursor: pointer;
  &: hover {
    background-color: #3092fa;
    transition: background-color 0.1s ease;
    color: #fff;
  }
`;
const CategoryText = styled.p`
  ${({ theme }) => theme.fontStyles.Body7};
  font-weight: 300;
  line-height: 0px;
`;
