import styled from 'styled-components';
import colors from '../../styles/colors';

export const CartContainer = styled.main`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    padding: 2rem 2rem;

    .title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        margin-bottom: 3.75rem;
    }

    .icon-back {
        font-size: 2rem;
        color: ${colors.black100};
    }

    .items {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;

        .paragraph {
            text-align: left;
        }

        .game-name {
            color: ${colors.black100};
        }

        .game-price {
            color: ${colors.black60};
            font-size: .8rem;
            font-family: 'Roboto Slab', serif;
            font-weight: 600;
        }

        .add-remove {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 5rem;

            button {
                font-size: 2rem;
                background: none;

                & .add {
                    height: 1.4rem;
                    color: ${colors.green};
                }

                & .remove {
                    height: 1.4rem;
                    color: ${colors.orange};
                }
            }
        }
    
        .total {
            margin-top: 1rem;
        }
    }
`;
