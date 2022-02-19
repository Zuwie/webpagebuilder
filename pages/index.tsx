import {Editor, Frame, Element} from '@craftjs/core';
import {createTheme} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import {NextSeo} from 'next-seo';
import React from 'react';

import {Viewport, RenderNode} from '../components/editor';
import {Container, Text} from '../components/selectors';
import {Button} from '../components/selectors/Button';
import {Custom1, OnlyButtons} from '../components/selectors/Custom1';
import {Custom2, Custom2VideoDrop} from '../components/selectors/Custom2';
import {Custom3, Custom3BtnDrop} from '../components/selectors/Custom3';
import {Video} from '../components/selectors/Video';
import Image from 'next/image';

const theme = createTheme({
    typography: {
        fontFamily: [
            'acumin-pro',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="h-full h-screen">
                <NextSeo
                    title="RS testground"
                    description="A React framework for building drag-n-drop page editors."
                    canonical="https://craft.js.org/"
                    twitter={{
                        site: 'craft.js.org',
                        cardType: 'summary_large_image',
                    }}
                />
                <Editor
                    resolver={{
                        Container,
                        Text,
                        Custom1,
                        Custom2,
                        Custom2VideoDrop,
                        Custom3,
                        Custom3BtnDrop,
                        OnlyButtons,
                        Button,
                        Video,
                        Image
                    }}
                    enabled={false}
                    onRender={RenderNode}
                >
                    <Viewport>
                        <Frame>
                            <Element
                                canvas
                                is={Container}
                                width="800px"
                                height="auto"
                                background={{r: 255, g: 255, b: 255, a: 1}}
                                padding={['40', '40', '40', '40']}
                                custom={{displayName: 'App'}}
                            >
                                <Element
                                    canvas
                                    is={Container}
                                    flexDirection="row"
                                    width="100%"
                                    height="auto"
                                    padding={['40', '40', '40', '40']}
                                    margin={['0', '0', '40', '0']}
                                    custom={{displayName: 'Introduction'}}
                                >
                                    <Element
                                        canvas
                                        is={Container}
                                        width="40%"
                                        height="100%"
                                        padding={['0', '20', '0', '20']}
                                        custom={{displayName: 'Heading'}}
                                    >
                                        <Text
                                            fontSize="23"
                                            fontWeight="400"
                                            text="Craft.js is a React framework for building powerful &amp; feature-rich drag-n-drop page editors."
                                        />
                                    </Element>
                                    <Element
                                        canvas
                                        is={Container}
                                        width="60%"
                                        height="100%"
                                        padding={['0', '20', '0', '20']}
                                        custom={{displayName: 'Description'}}
                                    >
                                        <Text
                                            fontSize="14"
                                            fontWeight="400"
                                            text="Everything you see here, including the editor, itself is made of React components. Craft.js comes only with the building blocks for a page editor; it provides a drag-n-drop system and handles the way user components should be rendered, updated and moved, among other things. <br /> <br /> You control the way your editor looks and behave."
                                        />
                                    </Element>
                                </Element>

                                <Element
                                    canvas
                                    is={Container}
                                    background={{r: 39, g: 41, b: 41, a: 1}}
                                    flexDirection="column"
                                    width="100%"
                                    height="auto"
                                    padding={['40', '40', '40', '40']}
                                    margin={['0', '0', '40', '0']}
                                    custom={{displayName: 'Ceo Letter'}}
                                >
                                    <Element
                                        canvas
                                        background={{
                                            r: 76,
                                            g: 78,
                                            b: 78,
                                            a: 0,
                                        }}
                                        is={Container}
                                        flexDirection="row"
                                        margin={['0', '0', '0', '0']}
                                        width="100%"
                                        height="auto"
                                        alignItems="center"
                                        custom={{displayName: 'Wrapper'}}
                                    >
                                        <Element
                                            canvas
                                            background={{
                                                r: 0,
                                                g: 0,
                                                b: 0,
                                                a: 0,
                                            }}
                                            is={Container}
                                            alignItems="center"
                                            padding={['0', '0', '0', '0']}
                                            flexDirection="row"
                                            width="350px"
                                            height="250px"
                                            custom={{displayName: 'Image'}}
                                        >
                                            <Image src="/eb.jpeg" alt="image of ceo" width="200" height="252" />
                                        </Element>
                                        <Element
                                            canvas
                                            background={{
                                                r: 0,
                                                g: 0,
                                                b: 0,
                                                a: 0,
                                            }}
                                            is={Container}
                                            padding={['0', '0', '0', '20']}
                                            flexDirection="column"
                                            width="55%"
                                            height="100%"
                                            fillSpace="yes"
                                            custom={{displayName: 'Content'}}
                                        >
                                            <Text
                                                color={{
                                                    r: '255',
                                                    g: '255',
                                                    b: '255',
                                                    a: '1',
                                                }}
                                                fontSize="20"
                                                text="Dr. Eloy Barrantes"
                                            />
                                            <Text
                                                color={{
                                                    r: '255',
                                                    g: '255',
                                                    b: '255',
                                                    a: '1',
                                                }}
                                                margin={['0', '0', '18', '0']}
                                                fontSize="14"
                                                text="CEO at nexxar / Paradots"
                                            />
                                            <Text
                                                color={{
                                                    r: '255',
                                                    g: '255',
                                                    b: '255',
                                                    a: '0.8',
                                                }}
                                                fontSize="14"
                                                fontWeight="400"
                                                text="Aliquam convallis vehicula dui vitae suscipit. Nam eget massa lacinia, maximus sem at, semper lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc nec turpis at metus faucibus euismod accumsan vel justo."
                                            />
                                        </Element>
                                    </Element>
                                </Element>
                                <Element
                                    canvas
                                    is={Container}
                                    background={{
                                        r: 234,
                                        g: 245,
                                        b: 245,
                                        a: 1,
                                    }}
                                    flexDirection="column"
                                    width="100%"
                                    height="auto"
                                    padding={['40', '40', '40', '40']}
                                    margin={['0', '0', '40', '0']}
                                    custom={{displayName: 'Programmatic'}}
                                >
                                    <Element
                                        canvas
                                        background={{
                                            r: 76,
                                            g: 78,
                                            b: 78,
                                            a: 0,
                                        }}
                                        is={Container}
                                        flexDirection="column"
                                        margin={['0,', '0', '20', '0']}
                                        width="100%"
                                        height="auto"
                                        custom={{displayName: 'Heading'}}
                                    >
                                        <Text
                                            color={{
                                                r: '46',
                                                g: '47',
                                                b: '47',
                                                a: '1',
                                            }}
                                            fontSize="23"
                                            margin={['0', '0', '24', '0']}
                                            text="Hear us sing"
                                        />
                                    </Element>
                                    <Custom2
                                        background={{
                                            r: 108,
                                            g: 126,
                                            b: 131,
                                            a: 1,
                                        }}
                                        height="400px"
                                        width="100%"
                                        margin={['0', '0', '24', '0']}
                                        shadow={40}
                                        flexDirection="row"
                                        alignItems="center"
                                    />
                                    <Element
                                        canvas
                                        background={{
                                            r: 76,
                                            g: 78,
                                            b: 78,
                                            a: 0,
                                        }}
                                        is={Container}
                                        flexDirection="row"
                                        margin={['30', '0', '0', '0']}
                                        width="100%"
                                        height="auto"
                                        custom={{displayName: 'Content'}}
                                    >
                                        <Element
                                            canvas
                                            background={{
                                                r: 0,
                                                g: 0,
                                                b: 0,
                                                a: 0,
                                            }}
                                            is={Container}
                                            padding={['0', '20', '0', '0']}
                                            flexDirection="row"
                                            width="45%"
                                            custom={{displayName: 'Left'}}
                                        >
                                            <Custom1
                                                background={{
                                                    r: 119,
                                                    g: 219,
                                                    b: 165,
                                                    a: 1,
                                                }}
                                                height="auto"
                                                width="100%"
                                                padding={['20', '20', '20', '20']}
                                                margin={['0', '0', '0', '0']}
                                                shadow={40}
                                            />
                                        </Element>
                                        <Element
                                            canvas
                                            background={{
                                                r: 0,
                                                g: 0,
                                                b: 0,
                                                a: 0,
                                            }}
                                            is={Container}
                                            padding={['0', '0', '0', '20']}
                                            flexDirection="column"
                                            width="55%"
                                            custom={{displayName: 'Right'}}
                                        >
                                            <Custom3
                                                background={{
                                                    r: 134,
                                                    g: 187,
                                                    b: 201,
                                                    a: 1,
                                                }}
                                                height="auto"
                                                width="100%"
                                                padding={['20', '20', '20', '20']}
                                                margin={['20', '0', '0', '0']}
                                                shadow={40}
                                                flexDirection="column"
                                            />
                                        </Element>
                                    </Element>
                                </Element>
                            </Element>
                        </Frame>
                    </Viewport>
                </Editor>
            </div>
        </ThemeProvider>
    );
}

export default App;
