interface ContactLinkCardProps {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    url: string;
    title: string;
    description: string;
}

export default function ContactLinkCard({ icon: Icon, url, title, description }: ContactLinkCardProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-brand-100/10 rounded-brand-md border border-brand-100 hover:border-brand-600 transition-colors group"
        >
            <div className="p-3 bg-brand-100 opacity-50 rounded-lg group-hover:opacity-100 transition-opacity">
                <Icon size={24} className="text-brand-600" />
            </div>
            <div>
                <span className="text-xs font-bold text-brand-600 uppercase">{title}</span>
                <p className="text-ink font-heading font-medium">{description}</p>
            </div>
        </a>
    );
}