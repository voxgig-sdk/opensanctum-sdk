<?php
declare(strict_types=1);

// Opensanctum SDK base feature

class OpensanctumBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(OpensanctumContext $ctx, array $options): void {}
    public function PostConstruct(OpensanctumContext $ctx): void {}
    public function PostConstructEntity(OpensanctumContext $ctx): void {}
    public function SetData(OpensanctumContext $ctx): void {}
    public function GetData(OpensanctumContext $ctx): void {}
    public function GetMatch(OpensanctumContext $ctx): void {}
    public function SetMatch(OpensanctumContext $ctx): void {}
    public function PrePoint(OpensanctumContext $ctx): void {}
    public function PreSpec(OpensanctumContext $ctx): void {}
    public function PreRequest(OpensanctumContext $ctx): void {}
    public function PreResponse(OpensanctumContext $ctx): void {}
    public function PreResult(OpensanctumContext $ctx): void {}
    public function PreDone(OpensanctumContext $ctx): void {}
    public function PreUnexpected(OpensanctumContext $ctx): void {}
}
