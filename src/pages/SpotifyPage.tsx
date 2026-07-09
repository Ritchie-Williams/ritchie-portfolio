import PageHeader from "../components/PageHeader";

function SpotifyPage() {
    return (
        <main className="min-h-screen bg-slate-950">
            <PageHeader
                eyebrow="Spotify"
                title="A creative dashboard for music data and API integration."
                description="This page will eventually use the Spotify API to display listening stats, top artists, favorite tracks, and music trends."
            />
        </main>
    );
}

export default SpotifyPage;