export default interface IComponent {
    /** コンポーネント名 */
    component: string | { name: string, params: any };
    /** コンポーネントID */
    componentId: string;

    onCreateViewModel(params?: any): void;
}
