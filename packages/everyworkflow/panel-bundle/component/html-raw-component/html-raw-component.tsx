/*
 * @copyright EveryWorkflow. All rights reserved.
 */

interface HtmlRawComponentProps {
    content: string;
    className?: string;
    style?: React.CSSProperties;
}

const HtmlRawComponent = ({
    content,
    className,
    style,
}: HtmlRawComponentProps) => {
    return (
        <div
            className={className}
            style={style}
            dangerouslySetInnerHTML={{ __html: content }} />
    );
};

export default HtmlRawComponent;
