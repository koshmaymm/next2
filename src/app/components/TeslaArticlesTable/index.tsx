import { Card, CardHeader, CardBody, CardFooter, Heading, StackDivider, Stack, Text, Image, SimpleGrid, Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import styles from './index.module.css';

export type TeslaArticlesTableProps = {
    articles?: any[];
}

const TeslaArticlesTable = ({ articles }: TeslaArticlesTableProps) => {

    if (!articles?.length) {
        return <Text fontSize='sm'>
            There is no article
        </Text>
    }

    return <SimpleGrid className={styles.wrapper} columns={[2, null, 3]} spacing='40px'>
        {
            articles?.map((article, index) => {
                return (<Card bg='chocolate' key={index}>
                    <CardHeader>
                        <Heading size='sm'>{article.title}</Heading>
                    </CardHeader>
                    <CardBody>
                        <Image
                            src={article.urlToImage}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            className={styles.image}
                            fallbackSrc={"https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg"}
                        />
                        <Stack divider={<StackDivider />} spacing='1'>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Summary
                                </Heading>
                                <Text fontSize='sm'>
                                    {article.content}
                                </Text>
                            </Box>
                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <Link href={article.url} isExternal>
                            {article.source.name ?? "Website"}
                        </Link>
                    </CardFooter>
                </Card>)
            })
        }
    </SimpleGrid>
}

export default TeslaArticlesTable;