<?php

function locateUniverseFormula()
{
    $root = '/tmp/documents';
    $iterator = new RecursiveDirectoryIterator($root, RecursiveDirectoryIterator::SKIP_DOTS);
    $files = new RecursiveIteratorIterator($iterator, RecursiveIteratorIterator::SELF_FIRST);

    foreach ($files as $file) {
        $removedExtension = substr($file->getFilename(), 0, strrpos($file->getFilename(), '.'));
        if ($removedExtension == 'universe-formula') {
            return $file->getPathname();
        }
    }
    return null;
}

$path = locateUniverseFormula();
if ($path === null) {
    echo "File not found\n";
} else {
    echo "Found at $path\n";
}