import styled from 'styled-components';
import colors from '../../styles/colors';

export const MainContainer = styled.main`
    max-width: 90%;
    height: 100%;
    
    background: ${colors.black40};
    
    margin: 2rem 5% 2rem 5%;
    
    .mySwiper {
        width: 100%;
        height: 25rem;
        
        background: ${colors.whiteItensCards};
        
        border-radius: 1rem;
        
        .swiper-slide {
            display: flex;
            align-items: baseline;
            flex-direction: column;

            text-align: center;
            font-size: 1.2rem;
            background: ${colors.whiteItensCards};
    
            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;

            .title {
                margin-bottom: 1rem;
                
                color: ${colors.black100};
            }

            .price {
                margin-top: .7rem;
                padding: .5rem 2rem;
                
                color: ${colors.whiteItensCards};
                background: ${colors.green};

                font-size: .8rem;
                
                border-radius: .5rem;

                transition: .3s;

                font-family: 'Roboto Slab', serif;
                font-weight: 600;

                &:hover {
                    opacity: .7;
                }
            }
        
            img {
                display: block;
                width: 11.25rem;
                height: 11.25rem;
                object-fit: cover;
            }
        }
    }

`;