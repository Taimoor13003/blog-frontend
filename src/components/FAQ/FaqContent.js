import * as React from "react"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

const query = graphql`
    {
        strapiFaqs {
            faq {
                id
                title
                description
                uuid
            }
        }
    }
`

const FaqContent = () => {

    const data = useStaticQuery(query)
    const {
        strapiFaqs
    } = data

    return (
		<>
            {strapiFaqs && (
                <div className="faq-area ptb-100">
                    <div className="container">
                        <div className="faq-accordion">
                            <Accordion preExpanded={['a']}>
                                {strapiFaqs.faq.map(list => (
                                    <AccordionItem uuid={list.uuid} key={list.id}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                {list.title}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <ReactMarkdown>
                                                {list.description}
                                            </ReactMarkdown>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            )}
		</>
    );
}

export default FaqContent;