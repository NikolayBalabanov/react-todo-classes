import React, { Component } from 'react';
import ButtonColored from '../ButtonColored';
import ButtonClose from '../ButtonClose';

interface INotificationProps {
  onClose: () => void;
}

export default class Notification extends Component<INotificationProps> {
  private modal: React.RefObject<HTMLDivElement>;
  private modalContent: React.RefObject<HTMLDivElement>;
  constructor(props: INotificationProps) {
    super(props);
    this.modal = React.createRef<HTMLDivElement>();
    this.modalContent = React.createRef<HTMLDivElement>();
  }

  private close = (fn: () => void) => {
    this.modal.current?.classList.add('opacity-0');
    this.modalContent.current?.classList.add('-translate-y-10');
    setTimeout(() => {
      fn();
    }, 300);
  };

  componentDidMount(): void {
    setTimeout(() => {
      this.modal.current?.classList.remove('opacity-0');
      this.modalContent.current?.classList.remove('-translate-y-10');
    }, 300);
  }

  public render() {
    const { onClose } = this.props;
    return (
      <div
        ref={this.modal}
        onClick={() => this.close(onClose)}
        className="flex items-center justify-center rounded-lg overflow-x-hidden overflow-y-auto fixed inset-0 z-30 bg-gray-500 bg-opacity-80 opacity-0 transition-opacity duration-300"
      >
        <div
          ref={this.modalContent}
          className="flex flex-col relative rounded-lg shadow-md bg-white md:px-[84px] px-10 py-[25px] -translate-y-10 duration-300 transition-transform dark:bg-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col-reverse text-center mb-[20px] justify-between items-center">
            <h2 className="text-2xl font-medium leading-[17px] text-gray-900 dark:text-gray-200">
              Task was successfully created!
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <ButtonColored type="resolve" text="Okay" onClickButton={() => this.close(onClose)} />
          </div>
          <ButtonClose callback={() => this.close(onClose)} />
        </div>
      </div>
    );
  }
}
