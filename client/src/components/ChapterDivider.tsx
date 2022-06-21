import React from 'react';

interface Props {
  title: string;
  id: string;
}

class ChapterDivider extends React.Component<Props> {
  render() {
    return (
      <div className="chapter-divider">
        <div className="chapter-divider__line"></div>
        <h1 id={ this.props.id } className="chapter-divider__title">{ this.props.title }</h1>
        <div className="chapter-divider__line"></div>
      </div>
    );
  }
}

export default ChapterDivider;
