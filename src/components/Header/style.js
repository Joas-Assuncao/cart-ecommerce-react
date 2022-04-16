import styled from 'styled-components';
import colors from '../../styles/colors';

export const HeaderContainer = styled.header`
    display: flex;
    width: 100%;

    .image-background {
        height: 100vh;
        width: 100%;
        object-fit: cover;
        position: fixed;
    }

    .content-header {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        z-index: 1;
    
        .above-items {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
    
            width: 100%;
            
            padding: 1rem 2rem;
    
            .title {
                color: ${colors.black100};
                
                border-radius: 1rem;
    
                letter-spacing: -3px;
    
                font-family: 'Roboto Slab', sans-serif;
                font-size: 36px;

                a {
                    margin-left: 1rem;
                    font-size: 1.5rem;
                }
            }
    
            .search {
                height: 2rem;
                width: auto;
                position: relative;
                margin-top: 1rem;
                
                .input-search {
                    position: relative;
                    height: 100%;
                    padding: .5rem 2.5rem .5rem .8rem; 
                    border-radius: .5rem;
                    outline: none;
    
                    &::placeholder {
                        color: ${colors.black40};
    
                        opacity: 1;
                    }
                }
    
                .icon-search {
                    width: 1rem;
                    height: 1rem;
                    position: absolute;
                    top: .5rem;
                    right: .8rem;
                }
            }
        }
    
        .navigation {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
    
            width: 100%;
            flex-wrap: wrap;
            
            background: rgba(30, 37, 56, 0.7);
    
            padding: 0 1rem 1rem 1rem;
    
            .links {
                font-size: .8rem;
                flex: none;
                color: ${colors.whiteItensCards};
                background: rgba(0, 0, 0, 0.3);
                margin-top: 1rem;
                margin-left: 1rem;
                margin-right: 1rem;
                padding: .5rem;
            }
        }
    }
`;