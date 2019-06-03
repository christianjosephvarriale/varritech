import { Fragment } from "react";

Glossary = props => {
    const { items } = props.items;
    return (
        <dl>
            {items.map(item => (
                <Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dt>{item.description}</dt>
                </Fragment>
            ))}
        </dl>
    )
}