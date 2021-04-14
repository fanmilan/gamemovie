import {Page} from "../common/Page/Page";
import {StartGameButton} from "../common/StartGameButton/StartGameButton";

export function HomePage() {
    return <Page>
        <StartGameButton title={'Угадай постер'} game_code={'poster'} />
        <StartGameButton title={'Угадай слоган'} game_code={'tagline'} />
    </Page>;
}